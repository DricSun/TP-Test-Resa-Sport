function validateMember(member) {
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return (
        typeof member.firstName === 'string' &&
        typeof member.lastName === 'string' &&
        emailRegex.test(member.email) &&
        typeof member.password === 'string' &&
        member.password.length >= 8
    );
}

module.exports = { validateMember };