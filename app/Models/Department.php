<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use TCG\Voyager\Traits\Spatial;

class Department extends Model
{
    use HasFactory, SoftDeletes, Spatial;

    protected $spatial = ['coordinates'];

    
}
