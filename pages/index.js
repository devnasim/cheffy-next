import React from 'react';
import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <div className="h-screen bg-gray-100 ">
        <div className="bg-home-bg-img bg-primary">
          <div className="flex px-12 justify-center">
            <div className="w-1/2 my-auto">
              <div className="texts">
                <h5 className="md:text-5xl text-2xl text-primary font-semibold">
                  Welcome to Cheffy
                </h5>
                <p className="text-sm text-primary">
                  Now you must select which service you want to go to
                </p>
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <Button type="primary">Primary Button</Button>
      <div>
      <h1>
          data: <span>{props.data}</span>
        </h1>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={() => dispatch(incrementCount())}>+1</button>
        <button onClick={() => dispatch(decrementCount())}>-1</button>
        <button onClick={() => dispatch(resetCount())}>Reset</button>
      </div> */}
      </div>
    </div>
  );
}

export default HomePage;
