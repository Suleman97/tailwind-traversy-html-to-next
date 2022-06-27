export const Button = ({ text, light }) => {
  return (
    <>
      <button
        className={`baseline rounded-full p-3 pt-3 px-6 ${
          light
            ? ' text-brightRed bg-white shadow-2xl hover:bg-gray-900'
            : '  text-white bg-brightRed hover:bg-brightRedLight'
        } `}
      >
        {text ? { text } : 'Get Started'}
        {/* {text} */}
      </button>
    </>
  );
};
