import * as React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from "@/layouts/app-layout";
import AdminLayout from "@/layouts/admin/layout";

import { Button } from '@/components/ui/button';

export default function RacesView() {
    return (
        <>
            <AppLayout>
                <AdminLayout>
                    <Head title="View Races" />

                    <p>View Race Page...</p>
                    <Button>
                        <Link href={route("create.races")}>Create A Race</Link>
                    </Button>

                </AdminLayout>
            </AppLayout>
        </>
    );
}
