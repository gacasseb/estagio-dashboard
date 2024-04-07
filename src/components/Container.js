const Container = ({ children }) => (
  <div className="p-6 sm:ml-64 h-full">
    <div className="container p-6 mx-auto border h-full rounded">
      {children}
    </div>
  </div>
);

export default Container;
