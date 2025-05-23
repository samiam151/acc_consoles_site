import { User } from "@/types/index";
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SyntheticEvent } from "react";
import { Transition } from '@headlessui/react';

import InputError from '@/components/input-error';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import AppLayout from "@/layouts/app-layout";
import AdminLayout from "@/layouts/admin/layout";


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin Home',
        href: '/admin',
    },
];

type AdminUserEditForm = {
    id: string;
    name: string;
    email: string;
    isPSN: number;
    gamer_id: string;
    role_id: number;
}

export default function UserDetail({ user }) {
    const { data, setData, put, errors, processing, recentlySuccessful } = useForm<Required<AdminUserEditForm>>({
        id: user.id,
        name: user.name,
        email: user.email,
        isPSN: user.isPSN,
        gamer_id: user.gamer_id,
        role_id: user.role.role_id
    });

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();

        put(route('admin.user.update', data));
    }

    return (
        <AppLayout>
            <AdminLayout>
                <Head title="Admin Portal" />

                <form onSubmit={submit} className="space-y-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>

                        <Input
                            id="name"
                            className="mt-1 block w-full"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            autoComplete="name"
                            placeholder="Full name"
                        />

                        <InputError className="mt-2" message={errors.name} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="email">Email address</Label>

                        <Input
                            id="email"
                            type="email"
                            className="mt-1 block w-full"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            autoComplete="username"
                            placeholder="Email address"
                        />

                        <InputError className="mt-2" message={errors.email} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor='isPSN'>What is your platform?</Label>
                        <Select
                            name='isPSN'
                            value={`${data.isPSN}`}
                            onValueChange={(value) => setData("isPSN", Number(value))}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select your platform" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="1">PlayStation</SelectItem>
                                    <SelectItem value="0">XBox</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <InputError className="mt-2" message={errors.isPSN} />
                    </div>

                    <div className="grid gap-2">
                        <label htmlFor="gamer_id">Gamer ID</label>
                        <Input
                            name='gamer_id'
                            type="text"
                            value={data.gamer_id}
                            placeholder='PlayStation ID or XBOX'
                            onChange={e => setData("gamer_id", e.target.value)}
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor='isPSN'>User Role</Label>
                        <Select
                            name='role_id'
                            value={`${data.role_id}`}
                            onValueChange={(value) => setData("role_id", Number(value))}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="2">User</SelectItem>
                                    <SelectItem value="1">Admin</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <InputError className="mt-2" message={errors.role_id} />
                    </div>



                    <div className="flex items-center gap-4">
                        <Button disabled={processing}>Save</Button>

                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p className="text-sm text-neutral-600">Saved</p>
                        </Transition>
                    </div>
                </form>
            </AdminLayout>

        </AppLayout>
    )
}
