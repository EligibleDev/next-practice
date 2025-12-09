const userDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    return (
        <div>
            <h1>user {id}</h1>
            <h2>user details</h2>
        </div>
    );
};

export default userDetails;
