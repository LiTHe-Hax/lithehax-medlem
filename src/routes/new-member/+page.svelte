<!-- <script lang="ts">
    import FormSubmit from "$lib/components/FormSubmit.svelte";
    import FormField from "$lib/components/FormField.svelte";
    import Section from "$lib/components/Section.svelte";
    import PageHead from "$lib/components/PageHead.svelte";
    import { createMember } from "$lib/api/member";
    import type { AxiosError, AxiosResponse } from "axios";

    let isSubmitting = $state(false);
    let isSuccessful = $state(false);
    let errorMessage = $state("");

    let firstNameError = $state<string | undefined>(undefined);
    let lastNameError = $state<string | undefined>(undefined);
    let emailError = $state<string | undefined>(undefined);
    let membershipTypeError = $state<string | undefined>(undefined);

    function requestMembership(e: SubmitEvent) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const firstName = formData.get("firstName")!.toString();
        const lastName = formData.get("lastName")!.toString();
        const email = formData.get("email")!.toString();
        const membershipType = formData.get("membershipType")!.toString();
        const isStudent = membershipType === "student";

        isSubmitting = true;
        isSuccessful = false;
        errorMessage = "";
        firstNameError = undefined;
        lastNameError = undefined;
        emailError = undefined;
        membershipTypeError = undefined;

        createMember(firstName, lastName, email, isStudent).then((res: AxiosResponse) => {
            isSuccessful = true;
        }).catch((err: AxiosError) => {
            if (err.response !== undefined) {
                errorMessage = err.response.status.toString() + " " + err.response.statusText;
                let data = err.response.data as {};
                if ('first_name' in data) {
                    let mainError = (data.first_name as string[])[0];
                    firstNameError = mainError;
                }
                if ('last_name' in data) {
                    let mainError = (data.last_name as string[])[0];
                    lastNameError = mainError;
                }
                if ('email' in data) {
                    let mainError = (data.email as string[])[0];
                    emailError = mainError;
                }
                if ('is_student' in data) {
                    let mainError = (data.is_student as string[])[0];
                    membershipTypeError = mainError;
                }
            } else {
                errorMessage = "The server didn't respond...";
            }
        }).finally(() => {
            isSubmitting = false;
        });
    }
</script>

<PageHead title="Member" description="Join LiTHe Hax and gain access to exclusive events, resources, and updates - become a member today!" />

<Section isThin>
    <h1>Become a member</h1>
    <p>
        Join LiTHe Hax and become a member! As a member, you'll gain access to exclusive
        events, resources, and updates about our organization's activities. Once your
        membership is approved by our board, we will contact you with further details.
    </p>

    <form onsubmit={requestMembership}>
        <FormField name="firstName" label="First name" type="text" required error={firstNameError} />
        <FormField name="lastName" label="Last name" type="text" required error={lastNameError} />
        <FormField name="email" label="Email" type="email" required error={emailError} />
        <FormField name="membershipType" label="Membership type" type="select" required error={membershipTypeError}>
            <option value="">--Please select a membership type--</option>
            <option value="student">Student</option>
            <option value="non-student">Non-student</option>
        </FormField>
        <FormSubmit disabled={isSubmitting}>Apply for membership</FormSubmit>
    </form>

    {#if isSuccessful}
        <p class="success-msg">Successfully applied for a membership!</p>
    {:else if errorMessage !== ""}
        <p class="error-msg">{errorMessage}</p>
    {/if}
</Section>

<style>
    form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        gap: 0.8rem;
    }

    form > :global(:nth-child(3)),
    form > :global(:nth-child(4)) {
        grid-column: 1 / span 2;
    }

    form > :global(:nth-child(5)) {
        grid-column: 1 / span 2;
        align-self: flex-end;
    }

    .success-msg {
        color: var(--success-color);
        text-align: center;
    }

    .error-msg {
        color: var(--error-color);
        text-align: center;
    }
</style> -->
