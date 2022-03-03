import { ActiveListItem } from '../../features/added-list';
import EditListItem from './edit-list-item';
import CompleteListItem from './complete-list-item';
import { NextPage } from 'next';
import { useAppSelector } from '../../app/hooks';
import {
  DetailState,
  displaySelector,
} from '../../features/details-display-state';

interface Props {
  item: ActiveListItem;
}

const ShoppingListItem: NextPage<Props> = (props) => {
  const { screen } = useAppSelector(displaySelector);
  return screen === DetailState.edit ? (
    <EditListItem item={props.item} />
  ) : (
    <CompleteListItem item={props.item} />
  );
};
export default ShoppingListItem;
