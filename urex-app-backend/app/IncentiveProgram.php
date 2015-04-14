<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class IncentiveProgram extends Model {

    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function images() {
        return $this->belongsToMany('Image');
    }
    
}
