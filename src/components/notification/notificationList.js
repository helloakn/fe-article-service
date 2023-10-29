
import {
  MainContainer
} from 'app/components/notification/notificationList.elements'

export default function NotificationList({ children, ...props }) {
  return (
  <MainContainer isShow={props.isShow}>
    hi
  </MainContainer>
  )
}