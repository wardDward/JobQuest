<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BookmarkController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'job_post_id' => 'required|integer'
        ]);

        $auth = auth()->user();

        $alreadyBookmarked = DB::table('bookmark_users')
            ->where('user_id', $auth->id)
            ->where('job_post_id', $data['job_post_id'])
            ->exists();

        if ($alreadyBookmarked) {
            return response()->json([
                'message' => 'Job is already bookmarked',
                'bookmarked' => false
            ], 403);
        } else {
            $marked = DB::table('bookmark_users')->insert([
                'user_id' => $auth->id,
                'job_post_id' => $data['job_post_id'],
                'created_at' => now(),
                'updated_at' => now()
            ]);

            return response()->json([
                'message' => 'Job bookmarked successfully',
                'bookmarked' => $marked
            ], 201);
        }
    }

    public function delete(Request $request, $id)
    {
  
        $auth = auth()->user()->id;

        if( $auth && !$id){
            abort(403);
        }

        $deleted = DB::table('bookmark_users')
            ->where('user_id', $auth)
            ->where('job_post_id', $id)
            ->delete();

        return response()->json([
            'deleted' => $deleted
        ]);

    }
}
