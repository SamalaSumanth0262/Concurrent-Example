import React, { useState, useEffect, Suspense } from "react";
import _ from "lodash";
const LoadData = props => {
  return props.data.map((item, key) => {
    return <img src={item.url} width='10' height='10' />;
  });
};

const Concurrent = () => {
  const [data, setState] = useState(null);

  const resource = async () => {
    var result = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    var data = await result.json();
    return await data;
  };

  useEffect(() => {
    resource()
      .then(response => {
        setState(response);
      })
      .catch(err => {
        console.log("TCL: Concurrent -> err", err);
      });
  }, []);
  if (data == null) {
    return <h1>Loading..........</h1>;
  }
  return (
    <>
      <div>Concurrent Example using Suspence</div>
      <Suspense fallback={<h2>loading 200 Images...</h2>}>
        <LoadData data={_.chunk(data, 200)[0]} />
      </Suspense>
      <hr />
      <Suspense fallback={<h2>loading 1000 Images...</h2>}>
        <LoadData data={_.chunk(data, 1000)[0]} />
      </Suspense>
      <hr />
      <Suspense fallback={<h2>loading 2500 Images...</h2>}>
        <LoadData data={_.chunk(data, 2500)[0]} />
      </Suspense>
      <hr />
      <Suspense fallback={<h2>loading 2500 Images...</h2>}>
        <LoadData data={_.chunk(data, 3500)[0]} />
      </Suspense>
      <hr />
      <Suspense fallback={<h2>loading 2500 Images...</h2>}>
        <LoadData data={_.chunk(data, 4500)[0]} />
      </Suspense>
    </>
  );
};

export default Concurrent;
