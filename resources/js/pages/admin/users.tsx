import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from "@/layouts/admin/layout";
import { Button } from "@/components/ui/button";

import { User } from "@/types/index";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin Home',
        href: '/admin',
    },
];

export default function Dashboard({ users }) {
    console.log(users[0])

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Admin Portal" />

            <AdminLayout>
                <h2>Manage Users</h2>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">User ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Platform</TableHead>
                            <TableHead>Gamer ID</TableHead>
                            <TableHead>Created Date</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            users.map((user: User) => (
                                <TableRow>
                                    <TableCell className="font-medium">{ user.id }</TableCell>
                                    <TableCell>{ user.name }</TableCell>
                                    <TableCell>{ user.email }</TableCell>
                                    <TableCell>{ user.role.role_id == 1 ? "Admin" : "User" }</TableCell>
                                    <TableCell>{ user.isPSN ? "PlayStation" : "XBOX" }</TableCell>
                                    <TableCell>{ user.gamer_id }</TableCell>
                                    <TableCell>{ user.created_at }</TableCell>
                                    <TableCell>
                                        <Button>
                                            <Link href={`/admin/users/${user.id}`}>Edit</Link>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </AdminLayout>
        </AppLayout>
    );
}
