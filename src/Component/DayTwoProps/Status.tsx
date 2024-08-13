type statusprops = {
  statuspro: "load" | "suc" | "fail";
};

export const Status = (props: statusprops) => {
  let message;

  if (props.statuspro == "load") {
    message = "Loading";
  } else if (props.statuspro == "suc") {
    message = "data fetched";
  } else if (props.statuspro == "fail") {
    message = "failed";
  }

  return (
    <div>
      <h1>status - {message}</h1>
    </div>
  );
};
