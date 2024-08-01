import React from "react";

const Card = ({ card }) => {
  return (
    <div className="card-parent relative min-h-fit h-full rounded overflow-hidden">
      <div className="card-container min-h-full relative bg-opacity-0">
        {/* ----------------------------------   */}
        <div className="opacity-0 bg-transparent h-fit p-14 min-h-60 grid gap-y-1">
          <div className="w-full text-center">
            <div className="icon w-[4rem] mx-auto">{card?.icon}</div>
          </div>
          <p className="text-xl font-semibold">{card.content1.title}</p>
          <p className="text-balance">{card.content1.description}</p>
          <p className="underline text-blue-500">See what's inside</p>
        </div>
        {/* ----------------------------------   */}
        {/* front */}
        <div className="front min-h-full w-full text-center absolute p-9 top-0 start-0 bg-white rounded-2xl">
          <div className="content min-h-full w-full grid gap-y-6">
            <div className="w-full text-center">
              <div className="icon w-[4rem] mx-auto">{card?.icon}</div>
            </div>
            <p className="text-xl font-semibold">{card.content1.title}</p>
            <p className="text-balance">{card.content1.description}</p>
            <p className="underline text-blue-500">See what's inside</p>
          </div>
        </div>
        {/* back */}
        <div className="back min-h-full w-full text-center grid gap-y-1 absolute p-9 top-0 start-0 bg-white rounded-2xl">
          <div className="content min-h-full w-full grid gap-y-1">
            <div className="w-full text-center">
              <div className="icon w-[4rem] mx-auto">{card?.icon}</div>
            </div>
            <p className="text-xl font-semibold">{card.content1.title}</p>
            <ul className="text-balance list-disc space-y-2 xs:ps-4 md:ps-16">
              {card.content2.description.map((item, i) => {
                return <li key={i} className="text-start">{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

{
  /* <div className="parent">
  <div class="container1 bg-violet-4000 min-h-[36dvh] md:h-auto">
    <div class="front side rounded-3xl">
      <div class="content-card flex flex-col gap-y-4 md:gap-y-8 items-center min-w-full min-h-full">
        <div className="p-1 w-16">{card?.icon}</div>
        <p className="text-xl font-semibold">{card.content1.title}</p>
        <p className="text-balance">{card.content1.description}</p>
      </div>
    </div>
    <div class="back side rounded-3xl">
      <div class="content-card flex flex-col gap-y-4 md:gap-y-8 items-center min-w-full min-h-full">
        <div className="p-1 w-16">{card?.icon}</div>
        <p className="text-xl font-semibold">{card.content1.title}</p>
        <ul className="list-disc space-y-2">
          {card.content2.description.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  </div>
</div>; */
}
