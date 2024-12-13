<script lang="ts">
    import Section from "$lib/components/Section.svelte";

    type LeaderboardData = { [key: string]: string };
    let leaderboardData = $state<LeaderboardData | undefined>(undefined);

    const SHEET_URL = 'https://docs.google.com/spreadsheets/d/14h0sFurutGcILR8XnIPeVq3mBKpCXTCFUmIeAFZCvQg/edit?usp=sharing';

    // @ts-ignore
    async function scrapeGoogleSheet(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch the sheet: ${response.statusText}`);
            }
            const html = await response.text();

            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            const table = doc.querySelector('table');
            if (!table) {
                throw new Error('No table found in the sheet.');
            }

            const rows = Array.from(table.querySelectorAll('tr'));
            const data = rows.map((row) =>
                Array.from(row.querySelectorAll('td')).map((cell) => cell.innerText.trim())
            );

            const result = {};
            for (let i = 2; i < data.length; i++) {
                const [timestamp, nickname] = data[i];
                if (nickname && timestamp) {
                    // @ts-ignore
                    result[nickname] = timestamp;
                }
            }

            return result;
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    }

    $effect(() => {
        scrapeGoogleSheet(SHEET_URL).then((json) => {
            if (json === null)
                leaderboardData = undefined;
            else
                leaderboardData = json;
        });
    });
</script>

<Section isThin>
    <h1>Christmas CTF 2024 Leaderboard</h1>
    {#if leaderboardData !== undefined}
        <p>{JSON.stringify(leaderboardData)}</p>
    {:else}
        <p>Loading leaderboard data...</p>
    {/if}
</Section>