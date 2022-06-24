import {ActiveListItem} from '../../features/added-list';
import EditListItem from './edit-list-item';
import CompleteListItem from './complete-list-item';
import {useAppSelector} from '../../app/hooks';
import {DetailState, displaySelector,} from '../../features/details-display-state';
import React from "react";

interface Props {
  item: ActiveListItem;
}

const ShoppingListItem: React.FC<Props> = (props) => {
  const {screen} = useAppSelector(displaySelector);
  return screen === DetailState.edit ? (
    <EditListItem item={props.item} />
  ) : (
    <CompleteListItem item={props.item} />
  );
};
export default ShoppingListItem;
