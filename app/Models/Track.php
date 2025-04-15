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
        'trackName',
        'trackSlug',
        'trackCountry',
        'trackCountryCode',
        'trackImage',
    ];
}
