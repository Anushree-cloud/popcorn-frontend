import { useSelector } from "react-redux";

export default function useCurrentUser() {
    const {currentUser} = useSelector((state) => state.user)
    return currentUser
    
}