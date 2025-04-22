<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class RaceController extends Controller
{
    public function show() {
        return Inertia::render('admin/races/view_races', []);
    }

    public function create() {
        return Inertia::render('admin/races/create_race', []);
    }

    public function store(Request $request) {

    }
}
