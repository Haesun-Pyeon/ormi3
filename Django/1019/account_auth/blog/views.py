from .models import Post
from .serializers import PostSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
# IsAuthenticatedOrReadOnly 이걸로 하면 로그인 안한 사용자는 읽기만 가능


class PostListAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        post_list = Post.objects.all()
        serializer = PostSerializer(post_list, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


postlist = PostListAPIView.as_view()
