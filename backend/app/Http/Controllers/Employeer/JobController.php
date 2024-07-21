<?php

namespace App\Http\Controllers\Employeer;

use App\Http\Controllers\Controller;
use App\Http\Resources\JobResource;
use App\Models\JobPost;
use Illuminate\Http\Request;
use League\CommonMark\CommonMarkConverter;
use Purifier;

class JobController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $auth = auth()->user()->id;

        $jobs = JobPost::with(['user'])->where('user_id', $auth)->paginate(5);

        return JobResource::collection($jobs);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => ['required', 'max:255'],
            'description' => ['required'],
            'starting_salary' => ['required'],
            'to_salary' => ['required']
        ]);

        // Parse and sanitize the description
        $converter = new CommonMarkConverter();
        $parsedDescription = $converter->convertToHtml($data['description']);
        $sanitizedDescription = Purifier::clean($parsedDescription);

        // Update the description with sanitized HTML
        $data['description'] = $sanitizedDescription;

        $job_post = auth()->user()->jobs()->create($data);

        return response()->json([
            'job' => $job_post
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(JobPost $jobPost)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, JobPost $jobPost)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(JobPost $jobPost)
    {
        //
    }
}
