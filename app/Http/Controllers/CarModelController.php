<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Http\Request;

class CarModelController extends Controller
{
    public function index()
    {
        return CarModel::all();
    }

    public function show($id)
    {
        return CarModel::findOrFail($id);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'id' => 'required|integer|unique:car_models',
            'car_make' => 'required|string',
            'car_model' => 'required|string',
            'image' => 'nullable|string',
            'car_dlc' => 'sometimes|boolean',
        ]);

        return CarModel::create($validated);
    }

    public function update(Request $request, $id)
    {
        $carModel = CarModel::findOrFail($id);
        $carModel->update($request->only(['car_make', 'car_model', 'image']));
        return $carModel;
    }

    public function destroy($id)
    {
        $carModel = CarModel::findOrFail($id);
        $carModel->delete();
        return response()->noContent();
    }
}
