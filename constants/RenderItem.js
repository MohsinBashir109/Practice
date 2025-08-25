import ContactCard from '../src/screens/ContactCard';

const renderItem = ({ item }) => (
  <ContactCard name={item.name} email={item.email} />
);
export default renderItem;
