<?php

namespace App\Http\Controllers;

use App\Http\Requests\RaceFormRequest;
use App\Models\Race;
use App\Services\RaceService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use App\Models\Track;

class RaceController extends Controller
{
    protected RaceService $raceService;

    public function __construct(RaceService $raceService)
    {
        $this->raceService = $raceService;
    }

    public function show() {
        $races = Race::with(['track', 'sessions'])->get();
        return Inertia::render('admin/races/view_races', [
            'races' => $races,
        ]);
    }

    public function create() {
        return Inertia::render('admin/races/create_race', [
            "tracks" => Track::all(),
        ]);
    }

    public function edit(Race $race) {
        return Inertia::render('admin/races/create_race', [
            "race" => Race::with(['track', 'sessions'])->find($race->id),
            "tracks" => Track::all(),
        ]);
    }

    public function store(Request $request): RedirectResponse {
        $isNew = $request->input("id") == null;
        if ($isNew) {
            $this->raceService->create_race($request);
        } else {
            $this->raceService->update_race($request);
        }
        return redirect(route("show.races"));
    }

    public function destroy(Race $race) {
        $race->delete();
        redirect(route("show.races"));
    }
}
