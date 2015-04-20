@extends('layouts/appmain');

@section('content')
    <h1>Upload Test</h1>

    {{ Form::open(['route' => 'uploads.store', 'files' => true]) }}
        <!-- Title Input -->
        <div class="form-group">
        	{{ Form::label( 'title', 'Title:') }}
        	{{ Form::text( 'title', null, array('class' => 'form-control')) }}
        </div>

        <!-- Loan_id Input -->
        <div class="form-group">
        	{{ Form::label( 'loan_id', 'Loan_id:') }}
        	{{ Form::text( 'loan_id', null, array('class' => 'form-control')) }}
        </div>

    <div class="form-group">
        {{ Form::label( 'thumbnail', 'Thumbnail:') }}
        {{ Form::file('thumbnail') }}
    </div>

        <!--  Submit -->
        <div class="form-group">
        	{{ Form::submit('Upload', ['class' => 'btn btn-primary']) }}
        </div>
    {{ Form::close() }}
@stop