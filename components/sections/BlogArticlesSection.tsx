"use client";

import { SearchIcon } from "lucide-react";
import { Tag } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { useBlogPosts } from "../../hooks/useBlogPosts";
import { NetlinBlogPost } from "../../lib/supabase";
import { getLocalizedContent, getLocalizedArray, getLanguageLabels, getLocalizedSlug, getLocalizedFeaturedImage } from "../../lib/locale";
import Link from "next/link";

export const BlogArticlesSection = (): JSX.Element => {
  const { getPublishedPosts } = useBlogPosts();
  const [articles, setArticles] = useState<NetlinBlogPost[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<NetlinBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const labels = getLanguageLabels();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const publishedPosts = await getPublishedPosts();
        setArticles(publishedPosts);
      } catch (error) {
        console.log('Using fallback articles due to connection issue');
        // Don't throw error, just use empty array and let fallback data be used
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [getPublishedPosts]);

  // Initialize category only once
  useEffect(() => {
    if (!selectedCategory && !loading) {
      setSelectedCategory(labels.allArticles);
    }
  }, [selectedCategory, loading, labels.allArticles]);

  useEffect(() => {
    if (articles.length === 0) return;
    
    let filtered = articles;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(article =>
        getLocalizedContent(article, 'title').toLowerCase().includes(searchTerm.toLowerCase()) ||
        getLocalizedContent(article, 'excerpt').toLowerCase().includes(searchTerm.toLowerCase()) ||
        getLocalizedContent(article, 'category').toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== labels.allArticles) {
      filtered = filtered.filter(article => getLocalizedContent(article, 'category') === selectedCategory);
    }

    setFilteredArticles(filtered);
  }, [articles, searchTerm, selectedCategory, labels.allArticles]);

  // Category filter data
  const allCategories = [labels.allArticles, ...new Set(articles.map(article => getLocalizedContent(article, 'category')))];
  const categories = allCategories.map(category => ({
    name: category,
    active: category === selectedCategory
  }));

  if (loading) {
    return (
      <section className="flex flex-col items-center gap-6 pt-32 pb-32 px-4 md:px-8 lg:px-16 xl:px-[65px] w-full">
        <div className="text-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">{labels.loadingArticles}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center gap-6 pt-32 pb-32 px-4 md:px-8 lg:px-16 xl:px-[65px] w-full">
      <div className="flex flex-col items-start gap-16 w-full">
        <div className="flex flex-col items-start gap-6 w-full">
          <h2 className="font-['Sora',Helvetica] font-semibold text-black text-5xl">
            {labels.allArticles}
          </h2>
          <p className="font-['Sora',Helvetica] font-normal text-[#807f8c] text-2xl max-w-[903px]">
            Wir entwickeln maßgeschneiderte KI-gestützte Systeme, die manuelle
            Arbeit eliminieren, Zeit sparen und dein Geschäft a
          </p>
        </div>

        <div className="flex flex-wrap items-start gap-6 w-full">
          <div className="flex items-center gap-4 px-6 py-4 flex-1 min-w-[280px] rounded-[10px] border border-solid border-[#e4e4e4]">
            <SearchIcon className="w-6 h-6 text-[#5d5d5d]" />
            <Input
              className="border-0 shadow-none font-['Sora',Helvetica] font-normal text-[#5d5d5d] text-lg focus-visible:ring-0 p-0 h-auto"
              placeholder={labels.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {categories.map((category, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={(e) => {
                e.preventDefault()
                setSelectedCategory(category.name)
              }}
              className={`inline-flex items-center justify-center px-6 py-4 h-[60px] rounded-[10px] border border-solid ${
                category.active
                  ? "bg-[#e1eeff] border-[#4d9aff]"
                  : "bg-transparent border-[#e4e4e4]"
              }`}
            >
              <span
                className={`font-['Sora',Helvetica] text-2xl ${
                  category.active
                    ? "font-semibold text-black"
                    : "font-normal text-[#5d5d5d]"
                }`}
              >
                {category.name}
              </span>
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {filteredArticles.map((article) => (
          <Card
            key={article.id}
            className="flex flex-col border-[#e4e4e4] rounded-xl h-full"
          >
            <CardContent className="flex flex-col h-full p-6">
              <img
                className="w-full h-[190px] object-cover"
                alt="Article thumbnail"
                src={getLocalizedFeaturedImage(article) || "/image-174-8.png"}
              />

              <div className="flex flex-col h-full mt-4">
                <div className="flex flex-col gap-4 flex-1">
                  <div className="flex items-center gap-2 w-full">
                    <Badge className="bg-transparent hover:bg-transparent text-[#3072eb] font-['Sora',Helvetica] font-semibold text-base tracking-[-0.32px]">
                      {getLocalizedContent(article, 'category')}
                    </Badge>
                    <Separator
                      orientation="vertical"
                      className="h-[18px] bg-[#e1e1e1]"
                    />
                    <span className="font-['Sora',Helvetica] font-normal text-[#5d5d5d] text-base tracking-[-0.32px]">
                      {new Date(article.published_at || article.created_at || '').toLocaleDateString()}
                    </span>
                  </div>

                  <h3 className="font-['Sora',Helvetica] font-semibold text-[#020202] text-xl tracking-[-0.40px]">
                    {getLocalizedContent(article, 'title')}
                  </h3>

                  <p className="font-['Sora',Helvetica] font-normal text-[#5d5d5d] text-base tracking-[-0.32px] line-clamp-3">
                    {getLocalizedContent(article, 'excerpt')}
                  </p>

                  {/* Tags */}
                  {getLocalizedArray(article, 'tags').length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {getLocalizedArray(article, 'tags').slice(0, 3).map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-xs px-2 py-1 bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 transition-colors flex items-center gap-1"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </Badge>
                      ))}
                      {getLocalizedArray(article, 'tags').length > 3 && (
                        <Badge
                          variant="outline"
                          className="text-xs px-2 py-1 bg-blue-50 text-blue-600 border-blue-200 flex items-center gap-1"
                        >
                          <Tag className="w-3 h-3" />
                          +{getLocalizedArray(article, 'tags').length - 3} more
                        </Badge>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link href={`/blog/${getLocalizedSlug(article)}`}>
                  <Button
                    variant="link"
                    className="inline-flex items-center gap-2 p-0 h-auto"
                  >
                    <span className="font-['Sora',Helvetica] font-semibold text-[#3072eb] text-base tracking-[-0.32px]">
                      {labels.learnMore}
                    </span>
                    <img className="w-3 h-3" alt="Arrow icon" src="/icon.svg" />
                  </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {filteredArticles.length === 0 && !loading && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-xl">{labels.noArticlesFound}</p>
          <p className="text-gray-400 mt-2">{labels.adjustFilters}</p>
        </div>
      )}
      
      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};
