<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Track extends Model
{
    protected $table = 'tracks';
    public $incrementing = false;
    protected $primaryKey = 'id';

    protected $fillable = [
        'id',
        'track_name',
        'track_slug',
        'track_country',
        'track_country_code',
        'track_image',
        'track_dlc',
    ];
}
