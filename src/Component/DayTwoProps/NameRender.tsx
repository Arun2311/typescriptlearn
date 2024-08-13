type nameprops = {
  personName: {
    first: string;
    last: string;
  };
  namelist: {
    first: string;
    last: string;
  }[];
};

export const NameRender = (props: nameprops) => {
  return (
    <div>
      NameRender {props.personName.first}
      <h1>
        {props.namelist.map((da) => (
          <h1> {da.first}</h1>
        ))}
      </h1>
    </div>
  );
};
