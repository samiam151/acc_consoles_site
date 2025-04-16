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
            'track_name' => 'required|string',
            'track_slug' => 'required|string',
            'track_country' => 'required|string',
            'track_country_code' => 'required|string|size:2',
            'trackI_image' => 'nullable|string',
            'track_dlc' => 'sometimes|boolean',

        ]);

        return Track::create($validated);
    }

    public function update(Request $request, $id)
    {
        $track = Track::findOrFail($id);
        $track->update($request->only([
            'track_name', 'track_slug', 'track_country', 'track_country_code', 'track_image', 'track_dlc'
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
