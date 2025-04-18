import { RaceContainer } from '@/components/homepage/RaceContainer';
import AppLayout from '@/layouts/app-layout';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    console.log(auth);

    return (
        <AppLayout>

            <section>
                <RaceContainer />
            </section>

        </AppLayout>
    );
}
