<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Track;

class RaceController extends Controller
{
    public function show() {
        return Inertia::render('admin/races/view_races', []);
    }

    public function create() {
        return Inertia::render('admin/races/create_race', [
            "tracks" => Track::all(),
        ]);
    }

    public function store(Request $request) {

    }
}
