<?php
namespace App\Http\Controllers\Employeer;

use App\Http\Controllers\Controller;
use App\Models\JobPost;
use Illuminate\Http\Request;

class JobPublishController extends Controller
{
    public function publication(Request $request)
    {

        $jobPost = JobPost::withTrashed()->find($request->id);

        if (!$jobPost) {
            return response()->json(['message' => 'Job post not found'], 404);
        }

        if ($jobPost->user_id !== auth()->user()->id) {
            abort(403);
        }

        if ($jobPost->trashed()) {
            // Restore the job post
            $jobPost->restore();

            return response()->json([
                'job' => $jobPost,
                'status' => false 
            ]);
        } else {
            $jobPost->delete();

            return response()->json([
                'job' => $jobPost,
                'status' => true 
            ]);
        }
    }
}
