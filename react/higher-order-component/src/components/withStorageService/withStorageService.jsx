import SessionStorageService from "../../services/SessionStorage";

const withStorageService = (Component) => {
  const handleAddItemToStorage = ({ item, data }) => {
    SessionStorageService.setItem(item, data);
  };

  const handleGetItemFromStorage = ({ item }) => {
    return SessionStorageService.getItem(item);
  };

  const WrappedComponent = (props) => (
    <Component
      {...props}
      addItemToStorage={handleAddItemToStorage}
      getItemFromStorage={handleGetItemFromStorage}
    />
  );

  WrappedComponent.displayName = `WithStorageService(${
    Component.displayName || Component.name || "Component"
  })`;

  return WrappedComponent;
};

export default withStorageService;
