import { Roles } from '@/enums/roles';
import AppLayout from '@/layouts/app-layout';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    console.log(auth);

    return (
        <AppLayout>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, reiciendis illo ea nemo quod rerum quos nesciunt atque saepe aliquid debitis recusandae et corporis porro illum possimus ipsa qui voluptatum. Aliquam enim libero, laborum, voluptatem ea sit quos doloribus praesentium eligendi est consequuntur laboriosam excepturi. Rerum voluptatum perferendis eum eveniet voluptates fugit quis quas necessitatibus. Totam quod nemo enim. Esse commodi temporibus deleniti aliquam suscipit quod natus rerum debitis blanditiis error itaque ratione minus voluptate explicabo exercitationem, soluta quos nihil similique facere nam earum! Commodi, et ad sit tempora nostrum atque corporis! Nostrum illo magni necessitatibus ex voluptatem? Nam, impedit.</p>
        </AppLayout>
    );
}
