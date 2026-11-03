const AllEventsPage = async () => {

    const res = await fetch("http://localhost:5000/events");
    const data = await res.json();
    return data;

    return (
        <div>
            
        </div>
    );
};

export default AllEventsPage;