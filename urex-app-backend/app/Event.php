<?php namespace App;

use Illuminate\Database\Eloquent\Model;
use Chrisbjr\ApiGuard\Models\ApiKey;
use App\Exceptions\ClientException;
use App\Exceptions\ServerException;

class Event extends Model {
    
    protected $guarded = ['id', 'created_at', 'updated_at'];
    protected $hidden = ['created_at', 'updated_at'];

    public function images() {
        return $this->belongsToMany('App\Image');
    }

    public function getStartAttribute($value)
    {
        return date("m/d/Y h:i A", strtotime($value));
    }

    public function getEndAttribute($value)
    {
        return date("m/d/Y h:i A", strtotime($value));
    }

    public static function find($id, $columns = array('*'))
    {
        $event = parent::find($id, $columns);

        if(is_null($event)) {
            throw new ClientException("Event not found.");
        }

        return $event;
    }

    public static function create(array $attributes)
    {
        $user = ApiKey::whereKey($attributes['X-Authorization'])->first()->user;

        $event = new Event;
        $event->title = $attributes['title'];
        $event->description = $attributes['description'];
        $event->start = date("Y-m-d h:i:s", strtotime($attributes['start']));
        $event->end = date("Y-m-d h:i:s", strtotime($attributes['end']));
        $event->cost = $attributes['cost'];
        $event->spots = $attributes['spots'];
        $event->gear_needed = $attributes['gear_needed'];
        $event->user_id = $user->id;

        if(array_key_exists('category_id', $attributes)) {
            $event->category_id = $attributes['category_id'];
        } else {
            $event->category_id = $user->category()->id;
        }

        if(!$event->save()) {
            throw new ServerException("Event was not created successfully due to an internal server error.");
        }

        return $event;
    }

    public function update(array $attributes = array())
    {
        $user = ApiKey::whereKey($attributes['X-Authorization'])->user;

        $this->title = $attributes['title'];
        $this->description = $attributes['description'];
        $this->start = date("Y-m-d h:i:s", strtotime($attributes['start']));
        $this->end = date("Y-m-d h:i:s", strtotime($attributes['end']));
        $this->cost = $attributes['cost'];
        $this->spots = $attributes['spots'];
        $this->gear_needed = $attributes['gear_needed'];
        $this->user_id = $user->id;

        if(array_key_exists('category_id', $attributes)) {
            $this->category_id = $attributes['category_id'];
        } else {
            $this->category_id = $user->category()->id;
        }

        if(!$this->save()) {
            throw new ServerException("Event was not updated successfully due to an internal server error.");
        }
    }

    public function delete() 
    {
        if(!EventImage::whereEventId($this->id)->delete() || !parent::delete()) {
            throw new ServerException("Event was not deleted successfully due to an internal server error.");
        }
    }

    public function associate_image($image_id)
    {
        EventImage::create(['event_id' => $this->id, 'image_id' => $image_id]);
    }

    public function dissociate_image($image_id)
    {
        EventImage::whereEventId($this->id)->where('image_id', '=', $image_id)->delete();
    }

}
