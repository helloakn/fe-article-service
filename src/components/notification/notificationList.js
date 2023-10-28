
import {
  MainContainer
} from 'app/style/components/notification/notificationList.style'

export default function NotificationList({ children, ...props }) {
  return (
  <MainContainer isShow={props.isShow}>
    hi
  </MainContainer>
  )
}