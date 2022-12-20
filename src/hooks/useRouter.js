// import { useMemo } from "react";
// import {
//   useParams,
//   useLocation,
//   useNavigate,
//   useMatch,
// } from "react-router-dom";

// import queryString from "query-string";

// export default function useRouter() {
//   const params = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const match = useMatch();

//   return useMemo(() => {
//     let routedFunc = {
//         navigate,
//         pathname: location.pathname,
//         params,
//         query: {
//           ...queryString.parse(location.search),
//         },
//         match,
//         location,
//         back : navigate(-1)
//       };
//       console.log('29=>',routedFunc);
//     return routedFunc
//   }, [params, match, location, navigate]);
// }