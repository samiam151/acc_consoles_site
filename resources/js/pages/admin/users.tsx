import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from "@/layouts/admin/layout";
import { Button } from "@/components/ui/button";


import {
    getCoreRowModel,
    useReactTable,
    getFilteredRowModel,
    ColumnFiltersState,
} from "@tanstack/react-table"

import { ArrowUpDown } from "lucide-react"

import { User } from "@/types/index";
import { Roles } from '@/enums/roles';
import { DataTable } from '@/components/datatable';
import { Input } from "@/components/ui/input"


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin Home',
        href: '/admin',
    },
];

type UserType = {
    id: number;
    name: string;
    email: string;
    gamer_id: string;
    isPSN: boolean;
}

const columns = [
    {
        accessorKey: "id",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    ID
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "gamer_id",
        header: "Player UID"
    },
    {
        accessorKey: "isPSN",
        header: "Platform",
        cell: ({ row }) => row.getValue("isPSN") === 1 ? "PlayStation" : "XBOX"
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const user = row.original;

            return (
                <Button><Link href={route("admin.users.detail", user)}>Edit</Link></Button>
            )
        },
    }
]

export default function Dashboard({ users }) {
    console.log(columns, users)

    const table = useReactTable({
        users,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <AdminLayout>
                <Head title="Admin Portal" />

                <h2>Manage Users</h2>
                <DataTable columns={columns} data={users}></DataTable>

            </AdminLayout>
        </AppLayout>
    );
}
