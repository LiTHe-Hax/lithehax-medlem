<script lang="ts">
    import Section from "$lib/components/Section.svelte";

    function requestMembership(e: SubmitEvent) {
        const formData = new FormData(e.target as HTMLFormElement);
        let firstName = formData.get("firstName")?.toString();
        let lastName = formData.get("lastName")?.toString();
        let email = formData.get("email")?.toString();
        let membershipType = formData.get("membershipType")?.toString();
        // TODO: POST request to backend
    }
</script>

<Section isThin>
    <h1>Become a member</h1>
    <p>
        Join LiTHe Hax and become a member! As a member, you'll gain access to exclusive
        events, resources, and updates about our organization's activities. Once your
        membership is approved by our board, we will contact you with further details.
    </p>

    <form on:submit|preventDefault={requestMembership}>
        <div class="field firstName">
            <label for="firstName">First name:</label>
            <input id="firstName" name="firstName" type="text" required />
        </div>

        <div class="field lastName">
            <label for="lastName">Last name:</label>
            <input id="lastName" name="lastName" type="text" required />
        </div>

        <div class="field email">
            <label for="email">Email:</label>
            <input id="email" name="email" type="email" required />
        </div>

        <div class="field membershipType">
            <label for="membershipType">Membership type:</label>
            <select id="membershipType" name="membershipType" required>
                <option value="">--Please select a membership type--</option>
                <option value="student">Student</option>
                <option value="non-student">Non-student</option>
            </select>
        </div>

        <div class="field submit">
            <!-- The invisible span makes the spacing between the button
             consistent with the spacing between the other fields. -->
            <span style="visibility: hidden;">.</span>
            <button type="submit">Become member</button>
        </div>
    </form>
</Section>

<style>
    /*
    TODO: Preferably the inputs and input fields should be
          separated from the page.
    */

    form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.8rem;
    }

    .field {
        display: flex;
        flex-direction: column;
    }

    .email, .membershipType, .submit {
        grid-column: 1 / span 2;
    }

    label {
        color: var(--form-label-fg);
    }

    input, select {
        padding: 0.5rem;
        border: 1px solid var(--input-border);
        border-radius: 0.25rem;
        background-color: var(--input-bg);
        color: var(--input-fg);
        box-shadow: inset 0 1px 3px 1px var(--input-shadow);
    }

    button {
        padding: 0.5rem;
        border: 0;
        border-radius: 0.25rem;
        background-color: var(--button-bg);
        color: var(--button-fg);
        box-shadow: 0 2px 4px 0 var(--button-shadow);
        font-size: 1em;
        font-weight: bold;
        transform: scaley(1);
        transition: all 150ms ease-out;
    }

    button:hover {
        background-color: var(--button-hover-bg);
        color: var(--button-hover-fg);
        transform: scaley(1.1);
    }
</style>