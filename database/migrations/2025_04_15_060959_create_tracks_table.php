<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tracks', function (Blueprint $table) {
            $table->unsignedInteger('id')->primary();
            $table->string('track_name');
            $table->string('track_slug');
            $table->string('track_country');
            $table->string('track_country_code', 2);
            $table->string('track_image')->nullable();
            $table->boolean('track_dlc')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tracks');
    }
};
