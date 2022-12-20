import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';

export const navItemsMain = [
    {
        id:1,
        name: "Dashboard", 
        path: '/',
        icon: <DashboardRoundedIcon color="secondary" />
    },
    {
        id:2,
        name: "Employee",
        // path: '/employee',
        icon: <SchoolRoundedIcon color="secondary" />,
        children: [
            {
                id:1,
                name: "Faculties",
                path: '/employee/faculties',
                icon: <SchoolRoundedIcon color="secondary" />,
            },
            {
                id:2,
                name: "Students",
                path: '/employee/students',
                icon: <SchoolRoundedIcon color="secondary" />,
            },
            {
                id:3,
                name: "Staffs",
                path: '/employee/staffs',
                icon: <SchoolRoundedIcon color="secondary" />,
            },
            {
                id:4,
                name: "HOD",
                path: '/employee/hod',
                icon: <SchoolRoundedIcon color="secondary" />,
            },
        ]
    },
    {
        id: 3,
        name: "Project",
        path: '/projects',
        icon: <AccountTreeRoundedIcon color="secondary" />
    }
    
];