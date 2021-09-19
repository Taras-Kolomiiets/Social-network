let initialState = {
  friends: [
    {
      id: 1123,
      avatar: "https://image.flaticon.com/icons/png/128/921/921071.png",
      name: "Mango",
    },
    {
      avatar: "https://image.flaticon.com/icons/png/128/145/145843.png",
      name: "Kiwi",
      id: 1137,
    },
    {
      avatar: "https://image.flaticon.com/icons/png/128/924/924874.png",
      name: "Ajax",
      id: 1213,
    },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
