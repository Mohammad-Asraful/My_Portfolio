import React from "react";

const Location = () => {
  return (
    <section>
      <div className="container mx-auto px-10 py-4">
        <div>
          <iframe
            className="w-full h-96"
            src="https://www.google.com/maps/d/embed?mid=1ZZ4BeO0W1zojWkWgwUQqzDfZW1g&hl=en_US&ehbc=2E312F"></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
