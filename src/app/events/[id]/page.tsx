import { Suspense } from "react";

const EventDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/events/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data);

  return (
    <div>
      <Suspense fallback={<div>Loading event details...</div>}>
        {/* <EventDetails id={id} /> */}
      </Suspense>
    </div>
  );
};

export default EventDetailsPage;
