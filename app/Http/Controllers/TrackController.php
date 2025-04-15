<?php

namespace App\Http\Controllers;

use App\Models\Track;
use Illuminate\Http\Request;

class TrackController extends Controller
{
    public function index()
    {
        return Track::all();
    }

    public function show($id)
    {
        return Track::findOrFail($id);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'id' => 'required|integer|unique:tracks',
            'trackName' => 'required|string',
            'trackSlug' => 'required|string',
            'trackCountry' => 'required|string',
            'trackCountryCode' => 'required|string|size:2',
            'trackImage' => 'nullable|string',
        ]);

        return Track::create($validated);
    }

    public function update(Request $request, $id)
    {
        $track = Track::findOrFail($id);
        $track->update($request->only([
            'trackName', 'trackSlug', 'trackCountry', 'trackCountryCode', 'trackImage'
        ]));
        return $track;
    }

    public function destroy($id)
    {
        $track = Track::findOrFail($id);
        $track->delete();
        return response()->noContent();
    }
}
