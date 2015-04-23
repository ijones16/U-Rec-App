<?php namespace App\Http\Controllers\Api;

use Response;
use App\Http\Requests;
use Illuminate\Support\Facades\Request;
use Chrisbjr\ApiGuard\Http\Controllers\ApiGuardController;
use App\Category;
use App\Traits\UrexExecutionHandlerTrait;

class CategoryController extends ApiGuardController {

    use UrexExecutionHandlerTrait;

    protected $apiMethods = [
        'index' => [ 'keyAuthentication' => false ],
        'show' => [ 'keyAuthentication' => false ]
    ];

    public function __construct()
    {
        parent::__construct();
        $this->middleware('admin');
    }

    public function index()
    {
        return Response::json(Category::all()->toArray());
    }

    public function store()
    {
        return $this->attemptExecution(function() {
            Category::create(Request::all());
            return Response::json(['message' => 'Category created successfully.']);
        });
    }

    public function show($id)
    {
        return $this->attemptExecution(function() use ($id) {
            return Response::json(Category::find($id)->toArray());
        });
    }

    public function update($id)
    {
        return $this->attemptExecution(function() use ($id) {
            Category::find($id)->update(Request::all());
            return Response::json(['message' => 'Category updated successfully.']);
        });
    }

    public function destroy($id)
    {
        return $this->attemptExecution(function() use ($id) {
            Category::find($id)->delete();
            return Response::json(['message' => 'Category deleted successfully.']);
        });
    }

}