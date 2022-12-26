import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import { BatchPrediction, PeopleAlt, TouchApp } from '@mui/icons-material';

export const navItemsMain = [
    {
        id:1,
        name: "Dashboard", 
        path: '/',
        icon: <DashboardRoundedIcon color="primary" />
    },
    {
        id:2,
        name: "Employees",
        // path: '/employee',
        icon: <PeopleAlt color="primary" />,
        children: [
            {
                id:2.1,
                name: "Faculties",
                path: '/employee/faculties',
                icon: <SchoolRoundedIcon color="primary" />,
            },
            {
                id:2.2,
                name: "Staffs",
                path: '/employee/staff',
                icon: <SchoolRoundedIcon color="primary" />,
            },
            {
                id:2.3,
                name: "HOD",
                path: '/employee/hod',
                icon: <SchoolRoundedIcon color="primary" />,
            },
        ]
    },
    {
        id:3,
        name: "Students",
        path: '/students',
        icon: <SchoolRoundedIcon color="primary" />,
    },
    {
        id:4,
        name: "Departments",
        path: '/departments',
        icon: <BatchPrediction color="primary" />,
    },
    {
        id: 5,
        name: "Projects",
        path: '/projects',
        icon: <AccountTreeRoundedIcon color="primary" />
    },
    {
        id: 6,
        name: "Courses",
        icon: <TouchApp color="primary" />,
        children: [
            {
                id: 6.1,
                name: "All Courses",
                path: '/courses-all',
                icon: <TouchApp color="primary" />
            },
            {
                id: 6.2,
                name: "Ongoing Courses",
                path: '/courses-ongoing',
                icon: <TouchApp color="primary" />
            },
            {
                id: 6.3,
                name: "Upcoming Courses",
                path: '/courses-upcoming',
                icon: <TouchApp color="primary" />
            }
        ]
    }
    
];