import { ActiveListItem } from '../../features/added-list';
import EditListItem from './edit-list-item';
import CompleteListItem from './complete-list-item';
import { NextPage } from 'next';

interface Props {
  item: ActiveListItem;
  isEditing: boolean;
}

const ShoppingListItem: NextPage<Props> = (props) => {
  return props.isEditing ? (
    <EditListItem item={props.item} />
  ) : (
    <CompleteListItem item={props.item} />
  );
};
export default ShoppingListItem;
