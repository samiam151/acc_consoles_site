<?php

namespace App\Services;

use App\Models\Race;
use App\Models\RaceSessions;
use Illuminate\Http\Request;

class RaceService {

    public function create_race(Request $request): void
    {
        $all = $request->all();
        $race = new Race($all);
        $race->save();

        foreach ($all['sessions'] as $session) {
            $saved_session = new RaceSessions($session);
            $race->sessions()->save($saved_session);
        }
    }

    public function update_race(Request $request): void
    {
        $all = $request->all();
        $race = Race::find($request->input("id"));
        $race->updateOrCreate(
            ['id' => $all['id']],
            $all
        );

        $race->sessions()->delete();
        foreach ($all['sessions'] as $session) {
            RaceSessions::updateOrCreate(
                ['id' => $session['id']],
                $session
            );
        }
    }

}
