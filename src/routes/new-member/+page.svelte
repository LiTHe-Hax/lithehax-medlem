<script lang="ts">
    import FormSubmit from "$lib/components/FormSubmit.svelte";
    import FormField from "$lib/components/FormField.svelte";
    import Section from "$lib/components/Section.svelte";

    let firstNameError: string | undefined = $state(undefined);
    let lastNameError: string | undefined = $state(undefined);
    let emailError: string | undefined = $state("This is an error"); // TODO: init to undefined
    let membershipTypeError: string | undefined = $state(undefined);

    function requestMembership(e: SubmitEvent) {
        e.preventDefault();

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

    <form onsubmit={requestMembership}>
        <FormField name="firstName" label="First name" type="text" required error={firstNameError} />
        <FormField name="lastName" label="Last name" type="text" required error={lastNameError} />
        <FormField name="email" label="Email" type="email" required error={emailError} />
        <FormField name="membershipType" label="Membership type" type="select" required error={membershipTypeError}>
            <option value="">--Please select a membership type--</option>
            <option value="student">Student</option>
            <option value="non-student">Non-student</option>
        </FormField>
        <FormSubmit>Apply for membership</FormSubmit>
    </form>
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
</style>